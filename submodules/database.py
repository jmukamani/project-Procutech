from mysql.connector import connect
"""
    Function to create a database cursor.

    Returns:
        cursor: The database cursor object.
        db: The database connection object.
"""
def create_cursor():
    """
    A function to create a database cursor.

    :return: tuple containing the cursor and database connection
    """
    db = connect(
        user='Juliet',
        password='password',
        port=3306,
        host='129.151.170.34',
        database='procuretech'
    )

    cursor= db.cursor()

    return cursor, db