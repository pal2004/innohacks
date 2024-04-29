#!/usr/bin/env python
# coding: utf-8

# In[104]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder

# In[105]:


df=pd.read_csv('./weblog.csv')

# In[106]:


df.head()

# In[107]:


df.isnull().sum()

# In[108]:


df.info()

# In[109]:


df['IP'].value_counts()

# In[110]:


df['Staus'].unique()

# Accepted-->202
# 
# 

# In[112]:


df['Staus'].value_counts()

# In[113]:


df['Staus'].unique()

# In[114]:


list1=[]
for i in df['Staus'].unique():
  if i.isdigit():
    list1.append(i)

# In[115]:


list1

# In[116]:


condition=df['Staus'].isin(list1)

# 

# In[117]:


filtered_df=df[condition]

# In[118]:


filtered_df

# In[119]:


filtered_df.shape

# In[120]:


filtered_df['Staus'].unique()

# In[121]:



status_counts = filtered_df.groupby(['IP', 'Staus']).size().unstack(fill_value=0)
status_counts.plot(kind='bar', stacked=True, figsize=(10, 6))
plt.title('Status Codes Distribution by IP Address')
plt.xlabel('IP Address')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.legend(title='Status Code')
plt.show()


# In[127]:


filtered_df[filtered_df['Staus']=='404']

# In[128]:


ip_counts = filtered_df['IP'].value_counts()
most_common_ip = ip_counts.idxmax()
print("IP address with the most occurrences of status code 404:", most_common_ip)
