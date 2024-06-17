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