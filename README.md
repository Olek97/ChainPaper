# ChainPaper
ChainPaper is an open-source, collaborative archive of key blockchain and cryptocurrency whitepapers and documents. Browse by section, download the papers you're interested in, and contribute by adding new documents!

## How to Add Whitepapers to ChainPaper

Contributing to ChainPaper is easy! Here’s how to add new whitepapers:

**1. Get Ready**

* Have your PDF whitepaper file.
* Decide on a **category name** for the paper (e.g., "Bitcoin," "Ethereum," "MyNewCrypto"). This will be the name of a folder.

**2. Add Your Files**

The recommended way is using Git:

* **(Optional but Recommended) Fork & Clone:**
    * Fork the ChainPaper repository on GitHub (`https://github.com/Olek97/ChainPaper` - *replace with your actual URL*).
    * Clone your fork to your computer.
    * Create a new branch for your additions (e.g., `add-mynewcrypto-paper`).

* **Create a Folder for Your Category (if it's new):**
    * All papers are organized in folders inside the main `papers/` directory.
    * **To add a new cryptocurrency or topic category that isn't listed yet, simply create a new folder inside `papers/`.** For example, to add "Litecoin" papers:
        ```bash
        # Navigate to your cloned repository's root
        cd ChainPaper 
        # Create the new category folder inside 'papers'
        mkdir papers/Litecoin 
        ```
    * Use clear, concise folder names.

* **Add Your PDF:**
    * Copy your PDF file into the appropriate folder (e.g., `papers/Litecoin/litecoin_whitepaper.pdf`).
    * **File Naming:** Use underscores (`_`) instead of spaces (e.g., `Original_Bitcoin_Paper.pdf`).

* **Commit & Push:**
    * Add your new folder and/or file(s):
        ```bash
        git add papers/
        ```
    * Commit your changes:
        ```bash
        git commit -m "Add [Paper Title] to [CategoryName]"
        ```
    * Push to your fork:
        ```bash
        git push origin your-branch-name
        ```

**3. Create a Pull Request**

* Go to your forked repository on GitHub.
* Click "New pull request" or follow the prompt to create one from your branch.
* Make sure it's comparing your branch to the main branch of the original ChainPaper repository.
* Add a brief title and description.
* Click "Create pull request."

**4. Done!**

Once your Pull Request is merged:

* Our automated system will scan for new folders and files.
* **If you created a new folder in `papers/`, it will automatically appear as a new category on the ChainPaper website.**
* Your added whitepaper(s) will be listed.

---

Thank you for helping grow ChainPaper!
