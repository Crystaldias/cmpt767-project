'''
csv_agg.py - Data Aggregation Script

This script processes the main dataset 'owid-covid-data.csv' and performs data aggregation,
creating summarized or aggregated data for further analysis. The aggregated results are stored
in the 'csv_agg' folder.

Usage:
    python csv_agg.py

'''
import pandas as pd
import numpy as np

df = pd.read_csv("owid-covid-data.csv")

#selected columns to aggregate over
selected_cols = ['total_cases_per_million', 'total_deaths_per_million', 'reproduction_rate', 
                 'icu_patients_per_million', 'total_tests_per_thousand', 'total_vaccinations_per_hundred',
                 'stringency_index','population_density','median_age','gdp_per_capita','extreme_poverty',
                  'cardiovasc_death_rate', 'diabetes_prevalence', 'female_smokers', 'male_smokers',
                'handwashing_facilities', 'hospital_beds_per_thousand',
                'life_expectancy', 'human_development_index']
df['date'] = pd.to_datetime(df['date'])

#aggregate by mean over each quarter and save to csv_agg
for parameter in selected_cols:
    agg_df = df.groupby([df['date'].dt.to_period('Q'), 'continent','location'])[parameter].sum().reset_index()
    agg_df.to_csv("csv_agg/{}.csv".format(parameter))