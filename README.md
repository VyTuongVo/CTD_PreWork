# CTD_PreWork
***
Important: If there is anything wrong with the website, please feel free to contact me through email, vtvo@ucdavis.edu or phone number 6692966875. Thank you
***


Welcome to my README.md file where I will explain all you need to know about my website "Cat World."

Table of Contents:

1. How to run the website
    - What is needed and bash commands to successfully run "Cat World."
    - Description of website pages
2. Function of each page
    - Functions of each page.
    - Backend description and functionality
3. Pre-work requirements checklist
4. Conclusion

---

1. How to Run the Website

    **This method works best with macOS and Windows. The most effective web browsers are Google Chrome and Safari.

    I. Access the website GitHub repository at https://github.com/VyTuongVo/CTD_PreWork.
    II. Clone the repository using the bash command: git clone git@github.com:VyTuongVo/CTD_PreWork.git
    ** The URL git@github.com:VyTuongVo/CTD_PreWork.git can be found on GitHub (website) by pressing the green "Code" button. Locate the SSH URL and copy it.
    III. You now have a copy of the full website code. For more information on the code, see Section 2. The next step is to access the website via an HTTP URL.
        1. Make sure your computer has "npm" (Node Package Manager) installed. If not, use "Homebrew" to download "npm"
        **To check if you have "Homebrew" and its version, enter "brew --version" in the terminal.
        2. After getting :Homebrew", enter "brew install node" to download Node.js, which also includes npm. Enter the command "npm install -g http-server" to install http-server and access the HTTP URL.
        3. Navigate to the CTD_PreWork folder using cd and enter "http-server -p 8000". The command will provide you with an HTTP URL such as http://127.0.0.1:8000 or http://11.25.67.251:8000. Copy and paste one the URL into your preferred web browser, and the website will appear.

2. Description of Website Pages

    Overall:
    The website has three total pages. The vibe and aesthetic I aimed for are simple and warm, like a cat lover creating a free-spirit website to express their love for felines.

    The first page is the homepage, which is accessed as soon as the user enters the site. This page has an interactive feature where a random cat picture appears in the middle of the page. There is also a "Load a New Cat" button that users can press to display a new random cat.

    At the top of the page, there are two tabs: "Cat Gallery" and "The Purrfect Breed."

    In the Cat Gallery tab, there are three columns and five rows of cat pictures. Users can load a new set of pictures by pressing the "Load New Gallery" button. To return to the homepage, press the "Home" button.

    If you press "The Purrfect Breed" tab, you will enter the final page. This page matches users with the best cat breeds based on their answers to five questions. To learn more about the breed, users are encouraged to click the Wikipedia page link. Users can edit their answers and reselect "Find My Cat Breed" to get new results.
    **More information and instructions can be found on the page.

    Code:
    All codes are in the CTD_PREWORK folder. Inside the folder, there are two subfolders containing code for the tabs: cat_gallery and meet_the_breeds. The homepage code and resources are located outside of these subfolders.

    In general, each page was created using:

    HTML: For general website setup.
    JavaScript (JS): For backend functionality.
    CSS: For website styling.
    **Please refer to the indivial code files' comments and notations for more detailed information.


3. Pre-work requiremnt checklist

    - Display the data for at least 2 of the end-points in the API
        ** For this website, I used two APIs: One to access images (used on the homepage for "Random Cat Image" and in the Cat Gallery page). Another to access breed descriptions (used as the foundation for "The Purrfect Breed," where user input is matched with the breed database for a response).
    - Include navigation from each end-point’s page to the other end-points that are displayed
        ** Tabs at the top of the page navigate between "Cat Gallery" and "The Purrfect Breed" in homepage. The Home button on each page to return back to Homepage also allows navigation between endpoints.
    - Issue new GET requests for the linked data to display in the linked pages.
        **In Cat Gallery and the Purrfect Breed, Get request is used to get images and Breed information.


4. Conclusion

    Thank you so much for interacting with my website. While it is simple, I hope that the adorable and funny cat pictures brighten your day. If they did, then the website has fulfilled its purpose—to bring a little joy by surrounding users with cats.

    On another note, I truly enjoyed creating this website and am very excited about the opportunity to be part of Code The Dream. CTD will provide me with invaluable learning experiences and opportunities that are essential for thriving in the competitive tech industry. I am especially excited about the mentorship and the valuable hand-on Python knowledge I will gain.

    Once again, thank you so much for your consideration. Thank you for reading, and have a PURRfect day!

