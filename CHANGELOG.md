# Changelog

### 2021-12-08

refactored CardsSearch component to have its own state & filtering logic
+ avoid relying on one filtering logic which makes it become a single point of failure
+ enhance the component reusability

added tests for CardsSearch

added tests placeholder for other components:
+ CardsContainer
+ useData hooks
+ utils