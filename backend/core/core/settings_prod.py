from .base import *
import os
from pathlib import Path
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv()

SECRET_KEY = os.environ.get('SECRET_KEY')

ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
    FRONTEND,
    os.getenv('FRONTEND'),
]
CORS_ALLOW_CREDENTIALS = True
SESSION_COOKIE_SECURE = False
AUTH_COOKIE = 'access'
AUTH_COOKIE_MAX_AGE = 60 * 60
AUTH_COOKIE_REFRESH_MAX_AGE = 60 * 60 * 24 * 10
AUTH_COOKIE_SECURE = True
AUTH_COOKIE_HTTP_ONLY = True
AUTH_COOKIE_PATH = '/'
AUTH_COOKIE_SAME_SITE = 'None'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'shoephoria',
        'USER': os.environ.get('MYSQL_USERNAME'),
        'PASSWORD': os.environ.get('MYSQL_PASSWORD'),
        'HOST': 'localhost',
        'PORT': 3306
    }
}