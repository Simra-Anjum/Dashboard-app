# Frontend Trainee Dashboard Assignment (React + Vite)

## Description
This project is a **React-based dynamic dashboard** built for the frontend trainee assignment, set up using Vite.

The dashboard has multiple categories, each containing widgets. Users can:

- **View** widgets under each category  
- **Add new widgets** dynamically  
- **Remove widgets** using the cross (✕) icon  
- **Search** widgets across all categories  

The data is dynamically loaded from `widgets.json`, and **React Context API** is used for local state management.

---

## Project Structure
```text
Dashboard-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Dashboard.js
│   ├── context/
│   │   └── DashboardContext.js
│   ├── data/
│   │   └── widgets.json
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md


---

## JSON Structure

`widgets.json`:

```json
{
  "CSPM Executive dashboard": [
    {
      "id": 1,
      "title": "CSPM Overview",
      "content": "Summary of CSPM dashboard metrics and status"
    },
    {
      "id": 2,
      "title": "Compliance Check",
      "content": "Details about compliance checks and results"
    }
  ],
  "CWPP dashboard": [
    {
      "id": 3,
      "title": "CWPP Overview",
      "content": "Summary of CWPP dashboard metrics and status"
    },
    {
      "id": 4,
      "title": "Threat Detection",
      "content": "Details of detected threats and alerts"
    }
  ],
  "Registry scan": [
    {
      "id": 5,
      "title": "Registry Overview",
      "content": "Summary of registry scan results"
    },
    {
      "id": 6,
      "title": "Vulnerable Entries",
      "content": "List of registry entries flagged as vulnerable"
    }
  ]
}

```bash
git clone <your-repo-link>
cd Dashboard-app
npm install
npm run dev


## How to Use the Dashboard

- View all categories and widgets
- Add new widgets using "+ Add Widget"
- Remove widgets using the cross (✕) icon
- Search widgets using the search input

## Notes

Only the cross (✕) icon removal method is implemented, as per assignment instructions.

The dashboard is fully dynamic; updating widgets.json will automatically reflect changes in the UI.

React Context API is used for local state management.

## Author

Simra Anjum
