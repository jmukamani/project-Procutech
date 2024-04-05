# FR 4.1 - Creating contracts
from submodules.database import create_cursor

def create_contract(vendor, entity, terms):
    """
    Create a contract with the provided vendor, entity, and terms.
    
    Parameters:
    vendor (str): The vendor for the contract.
    entity (str): The entity for the contract.
    terms (dict): The terms of the contract.
    
    Returns:
    bool: True if the contract is successfully created.
    """
    contract = contract(vendor=vendor, entity=entity, terms=terms)
    contract.save()
    return True

# FR 4.2 - Monitoring and tracking
def track_contract_milestones(contract):
    """
    Iterate through contract milestones, check if any are due, and take appropriate actions.
    """
    milestones = contract.get_milestones()
    for milestone in milestones:
        if milestone.is_due():
            # Send notifications or take appropriate actions
            pass
    return True