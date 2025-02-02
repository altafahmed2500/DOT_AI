# Generated by Django 4.2.5 on 2024-12-12 05:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("AssetAdmin", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="TransactionData",
            fields=[
                (
                    "transaction_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("from_address", models.CharField(max_length=255)),
                ("to_address", models.CharField(max_length=255)),
                ("time", models.DateTimeField(auto_now_add=True)),
                ("transaction_hash", models.CharField(max_length=64, unique=True)),
                ("block_number", models.CharField(max_length=64)),
                (
                    "created_by",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="transactions",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
