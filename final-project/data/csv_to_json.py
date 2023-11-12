"""
csv_to_json.py - CSV to JSON Conversion Script

This script reads data from a CSV file and converts it to JSON format. The user provides
the input CSV file path and the desired output JSON file path in a single line.

Usage:
    python csv_to_json.py
    
Input:
    python csv_to_json.py <input_path> <output_path>
"""

import csv, sys, os
import json

def csv_to_json(input_csv_path, output_json_path):
    data = []

    with open(input_csv_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            data.append(row)

    with open(output_json_path, 'w') as json_file:
        json.dump(data, json_file, indent=2)

if __name__ == "__main__":
    try:
        # Get input CSV and output JSON file paths
        input_csv_path, output_json_path = sys.argv[1], sys.argv[2]
        # Convert CSV to JSON
        csv_to_json(input_csv_path, output_json_path)
    except Exception as e:
        print(e)

