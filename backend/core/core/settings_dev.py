from .base import *
import os
from pathlib import Path
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv()

DEBUG = True

SECRET_KEY = 'django-insecure-m4hzertptylx=cd@lnnw$y40y!w0a1sla!3)k4o3&=74impaxq'

ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
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


REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Shoephoria API',
    'DESCRIPTION': 'A Shoe Marketplace',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
    # OTHER SETTINGS
}

# Application definition
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