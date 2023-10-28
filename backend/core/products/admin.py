from django.contrib import admin
from .models import (Usage,
                     Type,
                     SubType,
                     ProductInventory,
                     Size,
                     Material,
                     Product,
                     Variant,
                     Location)

# Register your models here.
admin.register(Usage)
admin.register(Type)
admin.register(SubType)
admin.register(ProductInventory)
admin.register(Size)
admin.register(Material)
admin.register(Product)
admin.register(Variant)
admin.register(Location)