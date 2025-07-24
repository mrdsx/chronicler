MIN_PASSWORD_LENGTH = 8
MIN_USERNAME_LENGTH = 3
MAX_USERNAME_LENGTH = 20

USERNAME_REGEX = "^[a-zA-Z0-9_]+$"
# lower- and uppercase letters, numbers, special characters OR underscores
PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$"
