# InfoCascade Data Management

This folder contains all web scraping utilities and timetable data for the InfoCascade project.

## Folder Structure

```
info-data/
├── scrapers/           # All timetable scraping scripts and utilities
│   ├── appliedscience/   # Applied Science department scraper
│   ├── bca/              # BCA department scraper
│   ├── civil/            # Civil Engineering department scraper
│   ├── cse/              # Computer Science & Engineering department scraper
│   ├── ece/              # Electronics & Communication Engineering department scraper
│   ├── electrical/       # Electrical Engineering department scraper
│   ├── it/               # Information Technology department scraper
│   ├── mechanical/       # Mechanical Engineering department scraper
│   ├── timetableUrls.js    # Configuration file with all department URLs
│   ├── watchTimetables.js  # Script to monitor URLs for changes
│   └── runAllTimetables.js # Script to run all department scrapers
│
└── data/               # Generated timetable data files
    ├── public/         # Public timetable JSON files for frontend
    │   ├── timetable_appliedscience.json
    │   ├── timetable_bca.json
    │   ├── timetable_civil.json
    │   ├── timetable_cse.json
    │   ├── timetable_ece.json
    │   ├── timetable_electrical.json
    │   └── timetable_it.json
    │
    └── web/            # Web timetable and group data
        ├── group/      # Department group names
        │   ├── appliedscience.json
        │   ├── bca.json
        │   ├── civil.json
        │   ├── cse.json
        │   ├── ece.json
        │   ├── electrical.json
        │   ├── it.json
        │   └── mechanical.json
        │
        └── timetable_*.json  # Full timetable data files
```

## Usage

### Running Scrapers

To scrape timetables for all departments:
```bash
node scrapers/runAllTimetables.js
```

To scrape a specific department (e.g., CSE):
```bash
node scrapers/cse/scrapeTimetable.js
```

### Monitoring for Changes

To monitor timetable URLs for changes and auto-scrape when detected:
```bash
node scrapers/watchTimetables.js
```

### Configuration

Edit `scrapers/timetableUrls.js` to update department timetable URLs.

## Data Files

- **timetable_*.json**: Contains all classes, rooms, teachers, and schedules for each department
- **group/*.json**: Lists valid group names for each department

## Notes

- All scrapers use Cheerio for HTML parsing and Axios for HTTP requests
- The generated data is used by the my-app frontend for timetable display and notifications
- Group data is imported in the profile/settings screens for user selection
