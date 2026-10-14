# EnergyWatch: Australian Television Energy Insights

A data-driven web application demonstrating data preparation, visual storytelling, and interactive communication for the **COS30045 Data Visualisation** unit at Swinburne University of Technology.

* **Live Site:** [https://t01-energy-website.vercel.app/](https://t01-energy-website.vercel.app/)
* **Repository:** [https://github.com/AllenLIEW9966/T01_Energy_Website.git](https://github.com/AllenLIEW9966/T01_Energy_Website.git)
* **Author:** Allen
* **Unit:** COS30045 Data Visualisation

---

## 1. Data Story & Target Audience (T03)

### Target Audience Overview
* **Who they are:** Australian homeowners, renters, and families shopping for a new living room television.
* **Characteristics:** Non-technical consumers who prioritize cost-of-living concerns and household running costs over complex engineering specifications. They want clear, trustworthy, and actionable buying advice.
* **Their Interest:** Understanding whether choosing a larger screen size, a newer display technology (like OLED), or a specific brand will lead to significantly higher quarterly electricity bills.

### What Do They Want to Know? (Prioritised Questions)
Based on our exploratory data planning on Miro:

* **Most Important (Directly impacts buying decisions):**
  1. *What screen technologies are available on the market?* (Chart 1: Over 85% of models are LCD LED; OLED is much less common).
  2. *What screen sizes are most common?* (Chart 2: 55-inch and 65-inch dominate the market, followed by large 75-inch screens).
  3. *Which brands dominate the market?* (Chart 3: Kogan, LG, and Samsung Electronics provide the largest catalogue variety).
  4. *Which screen technology uses the least power?* (Chart 4: Standard LCD draws the lowest power at ~70W median, while OLED draws the most at ~114W median).

* **Less Important (Provides context & awareness):**
  5. *How does screen size affect power consumption?* (Chart 5: Power consumption scales non-linearly/exponentially with screen size).
  6. *Do larger TVs have worse energy star ratings?* (Chart 6: Star ratings remain fairly distributed across sizes because ratings benchmark efficiency against surface area).

---

## 2. Storyboard Outline (Miro Planning)

Our narrative follows a 6-card user journey mapped directly to our Miro storyboard:

* **Card 1: The Issue (Hook)**  
  Electricity bills are rising across Australia. Many buyers do not realise that a large living room TV can quietly inflate quarterly power costs.
* **Card 2: Technology Comparison**  
  LCD (LED) makes up over 85% of store shelves and provides a balanced middle-ground (~107W median). Standard LCD uses the least power (~70W), while OLED consumes the most (~114W).
* **Card 3: The 'Size Penalty'**  
  Scatter plot analysis reveals power use shoots up rapidly (exponentially) once screens exceed 55–65 inches, jumping from under 50W to between 200W–450W+ on 75"+ screens.
* **Card 4: Brand Choices**  
  Kogan, LG, and Samsung Electronics offer the largest catalogue diversity, covering both budget-friendly eco models and high-draw flagship home cinema displays.
* **Card 5: The 'Sweet Spot'**  
  Data demonstrates that a **55" to 65" LED TV** gives great home immersion without triggering the heavy 200W+ energy penalties of 75"+ giants.
* **Card 6: Final Recommendation**  
  Practical consumer takeaway:
  1. Choose a **55"–65" LCD (LED)** panel for optimal balance.
  2. Target an Energy Rating of **5.5 stars or higher**.
  3. Switch off factory "Vivid" presets and use **Eco / Standard** picture mode to cut energy draw by 20–30%.

---

## 3. About the Data

### Data Source
The dataset was published by the Australian Government under *Energy Rating Data for Household Appliances (Labelled Products: Televisions)* and obtained directly from [data.gov.au](https://data.gov.au/data/dataset/energy-rating-for-household-appliances).

### Data Processing (KNIME Analytics Platform)
The raw dataset was cleaned and transformed using a systematic KNIME workflow:
1. **Handling Missing Values:** Dropped unneeded metadata columns with significant missing records (e.g., `Family Name`, `Product Website`).
2. **Deduplication:** Sorted by `Model_No` (Ascending) and `Submit_ID` (Descending), followed by a `Duplicate Row Filter` on `Model_No` to retain only the latest official registration per model.
3. **Availability & Geographical Filtering:** Filtered using `Row Filter` to retain only records with `Availability Status = "Available"` and `SoldIn` matching `*Australia*`.
4. **Text Standardisation:** Standardised brand names into uppercase using `String Manipulation` (`upperCase($Brand_Reg$)`) to remove casing duplicates.
5. **Unit Transformation:** Converted metric screen size (`screensize` in cm) to imperial inches (`screensize_inches`) using `Math Formula` (`round($screensize$ * 0.3937)`).

### Privacy
The dataset contains only public, statutory energy compliance specifications for commercially available consumer appliances. It contains zero personal data, customer identities, or personally identifiable information (PII).

### Accuracy and Limitations
* Testing figures (`Avg_mode_power`) are self-reported by manufacturers following standardized laboratory test conditions (AS/NZS 62087).
* Real-world operational power draw will vary based on user settings, including ambient room brightness, backlighting levels, volume, HDR/Dolby Vision streaming, and gaming console use.
* Administrative changes in admissions/submission protocols can cause minor series shifts across different registration years.

### Ethics
Publishing accessible, transparent appliance energy data supports environmental sustainability. It empowers consumers to make informed choices that reduce their household energy expenditure and carbon footprint.

---

## 4. AI Declaration

* **Tools Used:** Generative AI (ChatGPT) was consulted as an educational and editorial assistant for structuring the narrative storyboard, providing guidance on KNIME node troubleshooting, refining CSS styles, and formatting documentation.
* **Student Responsibility:** All KNIME workflow configurations (cleaning, filtering, sorting, aggregations, chart generation), Miro storyboard planning, design evaluations, and website content integrations were designed, implemented, and verified by the student.

---

## 5. Tech Stack & Tools
* **KNIME Analytics Platform:** Data preparation, cleaning, aggregation, and chart prototyping (T01b & T02).
* **Miro:** Audience analysis, question prioritization, and narrative storyboarding (T03).
* **HTML5 & CSS3:** Semantic markup, responsive layout, and clean editorial presentation (`televisions.html`).
* **JavaScript (Vanilla):** Navigation state management and active routing.
* **Git & GitHub:** Version control and repository hosting.
* **Vercel:** Automated production web deployment.