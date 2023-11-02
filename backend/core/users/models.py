from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserManager(BaseUserManager):

        def create_user(self, email, password=None, **extra_fields):
            if not email:
                raise ValueError('Users must have an email address')
            user = self.model(email=self.normalize_email(email), **extra_fields)
            user.set_password(password)
            user.save(using=self._db)
            return user

        def create_superuser(self, email, password):

            user = self.create_user(email, password)
            user.is_superuser = True
            user.is_staff = True
            user.save(using=self._db)
            return user

        def create_staffuser(self, email, password):
            user = self.create_user(email, password)
            user.is_staff = True
            user.save(using=self._db)
            return user

class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100, default='User')
    last_name = models.CharField(max_length=100, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    phone_number = models.IntegerField(null=True, blank=True)
    default_address = models.ForeignKey('Address', on_delete=models.SET_NULL, null=True, blank=True, related_name='default_address')

    USERNAME_FIELD = 'email'

    objects = UserManager()

    def __str__(self):
        return self.email


class Address(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    line_1 = models.CharField(max_length=100)
    line_2 = models.CharField(max_length=100, null=True, blank=True)
    landmark = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.IntegerField()
    contact_name = models.CharField(max_length=100, default='Contact Name')
    contact_number = models.IntegerField()
    address_type = models.ForeignKey('AddressType', on_delete=models.CASCADE)

    def __str__(self):
        return self.address

class AddressType(models.Model):
    name = models.CharField(max_length=100)
    timing = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name

class CartItems(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    variant = models.ForeignKey('products.Variant', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.product.name

class Orders(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100, default='Order Placed')

    def __str__(self):
        return self.product.name

class OrderItems(models.Model):
    order = models.ForeignKey(Orders, on_delete=models.CASCADE)
    variant = models.ForeignKey('products.Variant', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    breakdown = models.JSONField(null=True, blank=True)
    final_price = models.IntegerField()
    cancelled = models.BooleanField(default=False)
    cancellation_reason = models.ForeignKey('CancellationReason', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.product.name

class WishList(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name

class CancellationReason(models.Model):
    reason = models.CharField(max_length=100)

    def __str__(self):
        return self.name