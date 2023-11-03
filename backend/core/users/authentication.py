from rest_framework_simplejwt.authentication import JWTStatelessUserAuthentication
import logging

class CustomJWTAuthentication(JWTStatelessUserAuthentication):

    def authenticate(self, request):
        try:
            header = self.get_header(request)
            if header is None:
                raw_token = request.COOKIES.get('access')
                logging.info(raw_token)
            else:
                raw_token = self.get_raw_token(header)

            if raw_token is None:
                return None
            validated_token = self.get_validated_token(raw_token)
            return self.get_user(validated_token), validated_token
        except:
            return None
