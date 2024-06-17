# Shopping

# Routes

/customer_analysis 
  Method: Get
  Input: date_start_range, date_end_range
  Output: {
    orders_count
    customers_count
    average_order_value
  }

/data_refresh
   Method: get
   Input: Not required any
   Description: Loads the data again db 

# Data refresh on periodic time
Using Redis BullMQ, cron job can be scheduled to refresh the data periodically

# Error Logging
Winston from npm package can be used for logging the errors. Logs can be stored in separate file or in db.

# Schema Diagram
https://dbdiagram.io/d/Shopping-666fd85ca179551be608cae3
