from django.db import models

class Usage(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"<Usage name={self.name}>"

class Type(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"<Type name={self.name}>"

class ProductInventory(models.Model):
    variant = models.ManyToOneRel('Variant', on_delete=models.PROTECT, related_name='product_inventory')
    location = models.ForeignKey('Location', on_delete=models.PROTECT, related_name='product_inventory')
    in_stock = models.BigIntegerField()
    restock_date = models.DateField()
    sold_qty = models.BigIntegerField()
    last_restock_date = models.DateField()
    sold_since_last_restock = models.BigIntegerField()
    actual_price = models.DecimalField(max_digits=8, decimal_places=2, null=False)
    discounted_price = models.DecimalField(max_digits=8, decimal_places=2, null=False)

    def __str__(self):
        return f"<Inventory id={self.variant} location={self.location}>"

class Size(models.Model):
    size_cms = models.DecimalField(max_digits=8, decimal_places=2, unique=True)
    size_inches = models.DecimalField(max_digits=8, decimal_places=2, unique=True)
    UK = models.BigIntegerField(unique=True)
    US = models.BigIntegerField(unique=True)

    def __str__(self):
        return f"<Size  Size(cms)={self.size_cms}>"

class Material(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"<Material name={self.name}>"

class Product(models.Model):
    name = models.CharField(max_length=255, null=False, unique=True)
    usage = models.ForeignKey(Usage, on_delete=models.PROTECT, related_name='product')
    type = models.ForeignKey(Type, on_delete=models.PROTECT, related_name='product')
    description = models.CharField(max_length=255)
    features = models.JSONField()

    def __str__(self):
        return f"<Product name={self.name}>"

class Color(models.Model):
    name = models.CharField(max_length=255)
    hexcode = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"<Color name={self.name} hex={self.hexcode}>"

class Variant(models.Model):
    product = models.ForeignKey(Product, null=False, on_delete=models.PROTECT, related_name='variant')
    color = models.ForeignKey(Color, null=True, on_delete=models.PROTECT, related_name='variant')
    size = models.ForeignKey(Size, null=True, on_delete=models.PROTECT, related_name='variant')
    material = models.ForeignKey(Material, null=True, on_delete=models.PROTECT, related_name='variant')
    retail_price = models.DecimalField(max_digits=8, decimal_places=2)
    weight_gms = models.DecimalField(max_digits=8, decimal_places=2, null=True)

    def __str__(self):
        return f"<Variant product={self.product} color={self.color} size={self.size} material={self.material}>"

class Location(models.Model):
    name = models.CharField(max_length=255, unique=True)
    lat = models.DecimalField(max_digits=8, decimal_places=2)
    long = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name
