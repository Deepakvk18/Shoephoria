from .base import *
import os
from pathlib import Path
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv()

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