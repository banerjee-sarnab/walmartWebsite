# E-Commerce Website with Product Recommendations

This project was developed for the Walmart Sparkathon and provides a fully functional e-commerce website that offers product recommendations tailored to user demographics and choices. Key features include recommendations based on gender, age and visual search, geolocation and season based customization along with an interactive UI.

## Technologies Used

- **Frontend**: React
- **Backend**: Django with REST API
- **Authentication**: `django-rest-auth`
- **Database**: MySQL for data management
- **Modeling**: Sentence Transformers, ResNet50 and Cosine Similarity

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/banerjee-sarnab/walmartWebsite.git
```

### 2. Move to the desired directory

```bash
cd walmart
```

### 3. Install the required packages

```bash
pip install -r requirements.txt
```

### 4. Apply migrations

```bash
python manage.py migrate
```

### 5. Start the Django development server

```bash
python manage.py runserver
```

### 6. Set Up the React Frontend and install the necessary dependencies

```bash
npm install
```

### 7. Start the React development server

```bash
npm start
```
