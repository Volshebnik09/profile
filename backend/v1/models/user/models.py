import hashlib
import json

from django.db import models

from v1.models.base.models import BaseModel


class User(BaseModel):
    id = models.AutoField(primary_key=True)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    last_login = models.DateTimeField(null=True)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.email

    def to_dict(self):
        return {
            'id': self.id,
            'password': self.password,
            'email': self.email,
            'last_login': self.last_login,
        }

    def to_json(self):
        return json.dumps(self.to_dict())

    def set_password(self, password):
        # md5 password
        md5_password = hashlib.md5(password.encode('utf-8')).hexdigest()
        self.save()
        return

    def check_password(self, password):
        # md5 password
        md5_password = hashlib.md5(password.encode('utf-8')).hexdigest()
        return self.password == md5_password



