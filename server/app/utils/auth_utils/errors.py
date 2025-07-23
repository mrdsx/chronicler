from fastapi import HTTPException, status


def raise_exception_wrong_login_data():
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED, detail="Wrong email or password"
    )
