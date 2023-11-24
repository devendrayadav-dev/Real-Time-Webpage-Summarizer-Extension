# Import the Flask class from the flask module
from flask import Flask

# Import the 'extension' blueprint from the 'routes' module in the 'src.views' package
from src.views.routes import extension


# Create a Flask web application instance
app = Flask(__name__)


# Register the 'extension' blueprint under the root URL ("/") of the application
# This will associate the 'extension' routes with the application
app.register_blueprint(extension, url_prefix="")


# Define the main entry point for running the Flask application
if __name__ == "__main__":
    # Run the Flask application
    app.run()
