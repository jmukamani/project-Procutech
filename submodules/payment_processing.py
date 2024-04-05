# FR 5.1 - Payment management

from submodules.database import create_cursor

def initiate_payment(entity, vendor, amount):
    """
    A function to initiate a payment securely and process it, returning a boolean indicating success.
    
    Parameters:
    - entity (str): The entity initiating the payment.
    - vendor (str): The vendor receiving the payment.
    - amount (float): The amount of the payment.
    
    Returns:
    - bool: True if the payment was successfully processed, False otherwise.
    """
    cursor, db = create_cursor()
    payment = payment(entity=entity, vendor=vendor, amount=amount)
    payment.save()

    # Save payment status
    def process_payment(payment):
        """
        A function that processes a payment and updates its status.

        Args:
            payment: The payment object to be processed.

        Returns:
            bool: True if the payment was successfully processed, False otherwise.
        """
        if process_payment(payment):
            payment.status = 'completed'
            payment.save()
            return True
        else:
            return False

def view_payment_history(user):
    if user.role == 'vendor':
        payments = payments.objects.filter(vendor=user)
    elif user.role == 'government':
        payments = payments.objects.filter(entity=user)
    return payments