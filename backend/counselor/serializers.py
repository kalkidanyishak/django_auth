from rest_framework import serializers
from .models import CounselorProfile
from .models import Appointment

class CounselorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CounselorProfile
        fields = '__all__'


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'counselor', 'appointment_datetime']

class CounselorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CounselorProfile
        fields = ['id', 'user', 'bio', 'phone_number', 'years_of_experience']