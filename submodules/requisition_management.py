# FR 2.1 - Submit requisitions
from submodules.database import create_cursor
def submit_requisition(user, item_description, budget_allocation, quantity):
    """
    A function that submits a requisition if the user is authorized. 

    Parameters:
        user (User): The user submitting the requisition.
        item_description (str): The description of the item being requisitioned.
        budget_allocation (float): The budget allocated for the requisition.
        quantity (int): The quantity of the item being requisitioned.

    Returns:
        bool: True if the requisition was successfully submitted, False otherwise.
    """
    if user.is_authorized():
        requisition = requisition(user=user, item_description=item_description, budget_allocation=budget_allocation, quantity=quantity)
        requisition.save()
        return True
    else:
        return False

# FR 2.2 - Approvals
def approve_requisition(requisition):
    """
    A function that approves a requisition based on approval rules.
    
    Parameters:
    requisition (object): The requisition object to be approved.
    
    Returns:
    bool: True if the requisition meets approval rules and is successfully approved, False otherwise.
    """
    if requisition.meets_approval_rules():
        requisition.status = 'approved'
        requisition.save()
        return True
    else:
        return False