import jwt
from jwt.algorithms import ECAlgorithm
from fastapi import HTTPException, status
from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from config import settings
import base64
import json


def load_ES256_from_jwk_env():
    algo = ECAlgorithm("ES256")
    key = settings.ES256_KEY
    encode_key = base64.b64decode(key)
    json_key = json.loads(encode_key)
    ES256_key = algo.from_jwk(json_key.get("keys")[0])
    return ES256_key


class Auth:
    hasher = CryptContext(schemes=["bcrypt"])
    secret = settings.JWT_SECRET_KEY

    def encode_password(self, password: str) -> str:
        return self.hasher.hash(password)

    def verify_password(self, password: str, encoded_password: str) -> bool:
        return self.hasher.verify(password, encoded_password)

    def encode_token(self, email: str) -> str:
        payload = {
            "exp": datetime.now(timezone.utc) + timedelta(minutes=30),
            "iat": datetime.now(timezone.utc),
            "scope": "access_token",
            "sub": email,
        }
        signing_key = load_ES256_from_jwk_env()
        return jwt.encode(
            payload,
            signing_key,
            algorithm=settings.JWT_ALGO,
            headers={"kid": settings.ES256_KID},
        )

    def decode_token(self, token: str | bytes) -> dict:
        try:
            pub_key = load_ES256_from_jwk_env().public_key()
            decoded = jwt.decode(token, pub_key, algorithms=settings.JWT_ALGO)
            # print(decoded)
            return decoded
        except jwt.ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail={"error": "token_expired", "message": "Token expired"},
            )
        except jwt.InvalidTokenError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail={"error": "invalid_token", "message": "Invalid token"},
            )

    def encode_refresh_token(self, email: str) -> str:
        payload = {
            "exp": datetime.now(timezone.utc) + timedelta(hours=10),
            "iat": datetime.now(timezone.utc),
            "scope": "refresh_token",
            "sub": email,
        }

        signing_key = load_ES256_from_jwk_env()
        return jwt.encode(
            payload,
            signing_key,
            algorithm=settings.JWT_ALGO,
            headers={"kid": settings.ES256_KID},
        )

    def refresh_token(self, refresh_token: str | bytes) -> str:
        try:
            pub_key = load_ES256_from_jwk_env().public_key()  # use public key to decode
            payload = jwt.decode(refresh_token, pub_key, algorithms=settings.JWT_ALGO)
            if payload["scope"] == "refresh_token":
                email = payload["sub"]
                new_token = self.encode_token(email)
                return new_token
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid scope for token",
            )
        except jwt.ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token expired"
            )
        except jwt.InvalidTokenError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token"
            )

    def encode_reset_password_token(self, email: str) -> str:
        payload = {
            "exp": datetime.now(timezone.utc) + timedelta(hours=10),
            "iat": datetime.now(timezone.utc),
            "scope": "reset_password",
            "sub": email,
        }

        signing_key = load_ES256_from_jwk_env()
        # algo.sign(json.dumps(payload).encode("ascii"), signing_key)
        return jwt.encode(
            payload,
            signing_key,
            algorithm=settings.JWT_ALGO,
            headers={"kid": settings.ES256_KID},
        )
