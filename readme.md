# Page-Synopsis - Real Time Webpage Summarizer Extension

![Page-Synopsis Logo](/icons/icon16.png)

Page-Synopsis is a powerful browser extension that brings you the essence of the web in a nutshell. With the ability to summarize real-time webpages, Page-Synopsis saves you time and effort while ensuring you don't miss out on the vital information spread across lengthy articles and pages. Whether you're a researcher, a student, or just someone who loves staying informed, Page-Synopsis is your ultimate tool for efficient web browsing.

## Key Features

- **Real-Time Summarization:** Page-Synopsis utilizes advanced natural language processing techniques to provide you with concise and coherent summaries of webpages in real-time. Say goodbye to skimming through endless paragraphs; Page-Synopsis does the hard work for you.

![Page-Synopsis extension UI](/icons/extension_UI.png)

- **Effortless Installation:** Installing Page-Synopsis is a breeze. Just follow these simple steps:

    1. Clone this repository to your local machine and switch to 'page-synopsis' branch using the following commands:
        ```
        git clone https://kartik_lavkush@bitbucket.org/daffodilsoftware/ta115.git
        ```
        
        ```
        git checkout page-synopsis
        ```


    2. Create a Python virtual environment:
        ```
        python3 -m venv your_env_name
        ```

    3. Activate the virtual environment:

        for Ubuntu : 

        ```
        source your_env_name/bin/activate
        ```
    
        for Windows : 

        ```
        your_env_name/Scripts/activate
        ```

    4. Install the required dependencies from the `requirements.txt` file:
        ```
        pip install -r requirements.txt
        ```

    5. Run the Flask application:
        ```
        flask run
        ```

- **Seamless Browser Integration:** Once the Flask application is running, put the extension in developer mode in your browser's extension settings. Then, load the unpacked extension by pointing it to the `extension` directory within the cloned repository. Now you're all set to enjoy hassle-free webpage summarization!

![Page-Synopsis upload step](/icons/extension_upload_step.png)

- **Customizable Experience:** Page-Synopsis empowers you to adjust the level of summarization according to your preference. Whether you want a brief overview or a more comprehensive summary, Page-Synopsis has got you covered.

- **Copy and Share:** With Page-Synopsis, you can effortlessly copy your summarized content by simply clicking the copy icon. Share it with colleagues, friends. Never lose track of valuable information again.

## Compatibility

Page-Synopsis is currently compatible with major Chromium-based browsers, including Google Chrome and Microsoft Edge.

## Contribute

I welcome contributions from developers and enthusiasts alike. If you're interested in improving the extension, feel free to fork this repository, make your changes, and submit a pull request. Together, let's make web browsing smarter and more efficient!

## Feedback and Support

Have feedback or need help? Reach out to at kartik.lavkush@unthinkable.co. I commit to enhance your browsing experience with Page-Synopsis.

---

**Disclaimer:** Page-Synopsis is an open-source project that helps in improving the web browsing experience. The extension is provided as-is, and the developers are not responsible for any content generated by the summarization process. Users are advised to verify critical information from the original sources.
