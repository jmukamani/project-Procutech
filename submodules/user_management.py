# FR 1.1 - Register account
from submodules.database import User

def is_valid_credentials(username, password):
    """
    Check if the username and password meet the required criteria and if the username is not already taken.
    
    Parameters:
    - username (str): The username to be checked.
    - password (str): The password to be checked.
    
    Returns:
    - bool: True if the credentials are valid, False otherwise.
    """
    # Check if the username and password meet the required criteria
    if len(username) < 4:
        return False
    if len(password) < 8:
        return False
    if not any(char.isdigit() for char in password):
        return False
    if not any(char.isupper() for char in password):
        return False
    if not any(char.islower() for char in password):
        return False
    if User.objects.filter(username=username).exists():
        return False
    return True

def register_account(username, password, role):
    """
    Function to register a user account with the provided username, password, and role.

    Args:
        username (str): The username for the account.
        password (str): The password for the account.
        role (str): The role for the account.

    Returns:
        bool: True if the account is successfully registered, False otherwise.
    """
    # Validate credentials
    if is_valid_credentials(username, password):
        # Create user account with specified role
        user = User(username=username, password=password, role=role)
        user.save()
        return True
    else:
        return False
    
# FR 1.2 - Authentication
def authenticate_user(username, password):
    """
    Authenticate user based on provided username and password.
    
    Parameters:
    username (str): The username of the user.
    password (str): The password of the user.
    
    Returns:
    bool: True if authentication is successful, False otherwise.
    """
    user = User.objects.get(username=username)
    if user.check_password(password):
        # Authenticate user based on role
        if user.role == 'vendor':
            # Vendor-specific authentication logic
            pass
        elif user.role == 'government':
            # Government-specific authentication logic
            pass
        return True
    else:
        return False