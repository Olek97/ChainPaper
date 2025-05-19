# ChainPaper
ChainPaper is an open-source, collaborative archive of key blockchain and cryptocurrency whitepapers and documents. Browse by section, download the papers you're interested in, and contribute by adding new documents!

## How to Add Whitepapers to ChainPaper

We welcome contributions to ChainPaper! Adding new whitepapers helps grow this collaborative archive for everyone. Here's how you can contribute:

**1. Prepare Your Files**

* Ensure you have the whitepaper PDF file you want to add.
* Think about the most appropriate section (category) for the paper. Common sections might be "Bitcoin," "Ethereum," "DeFi," "NFTs," "Layer 2 Solutions," etc.

**2. Add the Whitepaper to the Repository**

The easiest way to contribute is by following these steps (ideally using Git):

* **(Recommended) Fork the Repository:**
    * Go to the main ChainPaper repository page on GitHub: `https://github.com/Olek97/ChainPaper` (replace with your actual repository URL).
    * Click the "Fork" button in the top-right corner to create a copy of the repository under your own GitHub account.

* **(Recommended) Clone Your Fork and Create a Branch:**
    * Clone your forked repository to your local machine:
        ```bash
        git clone [https://github.com/YOUR_USERNAME/ChainPaper.git](https://github.com/YOUR_USERNAME/ChainPaper.git)
        cd ChainPaper
        ```
    * Create a new branch for your changes (e.g., `add-new-paper-xyz`):
        ```bash
        git checkout -b add-new-paper-xyz
        ```

* **Create a Section Folder (if it doesn't exist):**
    * All whitepapers are organized into sections within the `papers/` directory.
    * Navigate to the `papers/` directory in your local repository.
    * If a folder for the section you want to add to (e.g., `Litecoin`) doesn't already exist, create it. Folder names should be clear and concise (e.g., `Litecoin`, `ZeroKnowledgeProofs`).
        ```bash
        mkdir papers/NewSectionName
        ```

* **Add Your PDF File:**
    * Copy your PDF file into the appropriate section folder (e.g., `papers/NewSectionName/your_whitepaper_title.pdf`).
    * **File Naming:** Please use clear, descriptive names for your PDF files. Use underscores (`_`) instead of spaces (e.g., `Bitcoin_A_Peer_to_Peer_Electronic_Cash_System.pdf`).

* **Commit and Push Your Changes:**
    * Add your new file(s) and folder(s) to Git:
        ```bash
        git add papers/NewSectionName/your_whitepaper_title.pdf
        # Or, to add all changes within the 'papers' directory:
        # git add papers/
        ```
    * Commit your changes with a descriptive message:
        ```bash
        git commit -m "Add [Paper Title] to [SectionName] section"
        ```
    * Push your changes to your forked repository:
        ```bash
        git push origin add-new-paper-xyz
        ```

**3. Create a Pull Request**

* Go to your forked repository page on GitHub.
* You should see a prompt to create a "Pull Request" from your new branch. Click it.
* If you don't see the prompt, go to the "Pull requests" tab and click "New pull request."
* Ensure the base repository is the original ChainPaper repository and the head repository is your fork and branch.
* Provide a clear title and a brief description for your Pull Request, explaining what paper(s) you've added.
* Click "Create pull request."

**4. Automatic Update**

Once your Pull Request is reviewed and merged into the main ChainPaper repository:

* A GitHub Actions workflow will automatically run.
* This action will scan the `papers/` directory, detect the new additions, and update the `manifest.json` file.
* The ChainPaper website will then automatically reflect the newly added section and/or whitepaper(s). No manual update of the website's list is needed from your side!

---

Thank you for contributing to ChainPaper!
