from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):

        class Meta(UserCreateSerializer.Meta):
            model = User
            fields = ['id', 'email', 'first_name', 'last_name', 'password']

class UserSerializer(serializers.ModelSerializer):

        depth = 1

        class Meta:
            model = User
            fields = ['id', 'email', 'first_name', 'last_name', 'phone_number', 'default_address']

class AddressSerializer(serializers.ModelSerializer):

    depth = 1

    class Meta:
        model = Address
        fields = '__all__'

class AddressTypeSerializer(serializers.ModelSerializer):

        class Meta:
            model = AddressType
            fields = '__all__'


class CartSerializer(serializers.ModelSerializer):

    depth = 1

    class Meta:
        model = Cart
        fields = '__all__'

class CartItemsSerializer(serializers.ModelSerializer):

    depth = 1

    class Meta:
        model = CartItems
        fields = '__all__'

class OrdersSerializer(serializers.ModelSerializer):

    depth = 1

    class Meta:
        model = Orders
        fields = '__all__'

class OrderItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItems
        fields = '__all__'

class WishlistSerializer(serializers.ModelSerializer):

    depth = 1

    class Meta:
        model = WishList
        fields = '__all__'