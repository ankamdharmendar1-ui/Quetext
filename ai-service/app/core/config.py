from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = "VeriWrite API"
    secret_key: str = "replace-me"
    access_token_expire_minutes: int = 120
    database_url: str = "sqlite:///./veriwrite.db"
    redis_url: str = "redis://localhost:6379/0"
    google_cse_api_key: str = ""
    google_cse_id: str = ""
    razorpay_key_id: str = ""
    razorpay_key_secret: str = ""
    free_word_limit_per_day: int = 1000


settings = Settings()
