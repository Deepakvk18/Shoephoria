from django.contrib import admin
from django.contrib.auth.models import User
from .models import *

# Register your models here.
admin.register(User)
admin.register(Address)
admin.register(AddressType)
admin.register(Cart)
admin.register(CartItems)
admin.register(Orders)
admin.register(OrderItems)
admin.register(WishList)