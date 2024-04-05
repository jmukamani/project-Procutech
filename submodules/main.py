from flask import Flask, request, jsonify
from submodules.user_management import register_account, authenticate_user
from submodules.requisition_management import submit_requisition, approve_requisition
from submodules.tendering import submit_bid, post_opportunity
from submodules.contract_management import create_contract, track_contract_milestones
from submodules.payment_processing import initiate_payment, view_payment_history

app = Flask(__name__)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')
    result = register_account(username, password, role)
    if result:
        return jsonify({'message': 'User registered successfully'}), 201
    else:
        return jsonify({'message': 'User registration failed'}), 400

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = authenticate_user(username, password)
    if user:
        return jsonify({'message': 'Login successful', 'user': user}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/submit-requisition', methods=['POST'])
def submit_requisition_route():
    data = request.get_json()
    user_id = data.get('user_id')
    item_description = data.get('item_description')
    budget_allocation = data.get('budget_allocation')
    quantity = data.get('quantity')
    result = submit_requisition(user_id, item_description, budget_allocation, quantity)
    if result:
        return jsonify({'message': 'Requisition submitted successfully'}), 201
    else:
        return jsonify({'message': 'Requisition submission failed'}), 400

@app.route('/api/approve-requisition', methods=['POST'])
def approve_requisition_route():
    data = request.get_json()
    requisition_id = data.get('requisition_id')
    result = approve_requisition(requisition_id)
    if result:
        return jsonify({'message': 'Requisition approved successfully'}), 200
    else:
        return jsonify({'message': 'Requisition approval failed'}), 400

@app.route('/api/submit-bid', methods=['POST'])
def submit_bid_route():
    data = request.get_json()
    vendor_id = data.get('vendor_id')
    opportunity_id = data.get('opportunity_id')
    documentation = data.get('documentation')
    pricing = data.get('pricing')
    result = submit_bid(vendor_id, opportunity_id, documentation, pricing)
    if result:
        return jsonify({'message': 'Bid submitted successfully'}), 201
    else:
        return jsonify({'message': 'Bid submission failed'}), 400

@app.route('/api/post-opportunity', methods=['POST'])
def post_opportunity_route():
    data = request.get_json()
    entity_id = data.get('entity_id')
    tender_notice = data.get('tender_notice')
    requirements = data.get('requirements')
    result = post_opportunity(entity_id, tender_notice, requirements)
    if result:
        return jsonify({'message': 'Opportunity posted successfully'}), 201
    else:
        return jsonify({'message': 'Opportunity posting failed'}), 40

@app.route('/api/create-contract', methods=['POST'])
def create_contract_route():
    data = request.get_json()
    contract_id = data.get('contract_id')
    contract_details = data.get('contract_details')
    result = create_contract(contract_id, contract_details)
    if result:
        return jsonify({'message': 'Contract created successfully'}), 201
    else:
        return jsonify({'message': 'Contract creation failed'}), 400

@app.route('/api/track-contract-milestones', methods=['POST'])
def track_contract_milestones_route():
    data = request.get_json()
    contract_id = data.get('contract_id')
    result = track_contract_milestones(contract_id)
    if result:
        return jsonify({'message': 'Contract milestones tracked successfully'}), 200
    else:
        return jsonify({'message': 'Contract milestones tracking failed'}), 400

@app.route('/api/initiate-payment', methods=['POST'])
def initiate_payment_route():
    data = request.get_json()
    contract_id = data.get('contract_id')
    payment_details = data.get('payment_details')
    result = initiate_payment(contract_id, payment_details)
    if result:
        return jsonify({'message': 'Payment initiated successfully'}), 201
    else:
        return jsonify({'message': 'Payment initiation failed'}), 400

@app.route('/api/view-payment-history', methods=['POST'])   
def view_payment_history_route():
    data = request.get_json()
    contract_id = data.get('contract_id')
    result = view_payment_history(contract_id)
    if result:
        return jsonify({'message': 'Payment history retrieved successfully'}), 200
    else:
        return jsonify({'message': 'Payment history retrieval failed'}), 400

if __name__ == '__main__':
    app.run()