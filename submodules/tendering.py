from submodules.database import create_cursor, db

def tenders():
  """
  A function to retrieve tenders from the database and display them with their details.
  """
  cursor, db = create_cursor()
  query = "SELECT id, title, description, closing_date FROM tenders ORDER BY closing_date DESC"
  cursor.execute(query)
  for (id, title, description, closing_date) in cursor:
      print(f"Tender {id}: {title}\nDescription: {description}\nClosing date: {closing_date}\n")

  # FR 3.1 - Submit bids
def submit_bid(vendor, opportunity, documentation, pricing):

    """
    submit_bid function takes in vendor, opportunity, documentation, and pricing and saves a bid.
    
    Parameters:
    - vendor: the vendor submitting the bid
    - opportunity: the opportunity for which the bid is being submitted
    - documentation: any relevant documentation for the bid
    - pricing: the pricing details for the bid
    
    Returns:
    - True if the bid is successfully submitted
    """
    bid = bid(vendor=vendor, opportunity=opportunity, documentation=documentation, pricing=pricing)
    bid.save()
    return True

# FR 3.2 - Post opportunities
def post_opportunity(entity, tender_notice, requirements):
    """
    A function that posts an opportunity with the given entity, tender notice, and requirements.

    Parameters:
    - entity: The entity associated with the opportunity.
    - tender_notice: The tender notice information for the opportunity.
    - requirements: The requirements for the opportunity.

    Returns:
    - True if the opportunity was successfully posted.
    """
    opportunity = opportunity(entity=entity, tender_notice=tender_notice, requirements=requirements)
    opportunity.save()
    return True

  # Close the database connection
db.close()