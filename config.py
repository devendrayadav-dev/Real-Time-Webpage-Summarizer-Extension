# Import required libraries and modules
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Access the OPENAI_API_KEY environment variable and store it in the variable `OPENAI_API_KEY`
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
