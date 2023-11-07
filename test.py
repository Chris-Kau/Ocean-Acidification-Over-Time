import pandas as pd
def get_column(file, filename):
    df = pd.read_excel(file).to_dict()
    date = df['yyyymmdd']
    pH_mean = df['FET_PHINT_mean']
    pCO2_levels = df['SAMI_CO2_mean']
    with open(filename, "w") as file:
        file.write('')
    with open(filename, "a") as file:
        for i in date.keys():
            temp = (f"{date[i]}, {pH_mean[i]}, {pCO2_levels[i]}\n")
            if str(-9999) not in temp:
                file.write(temp)
    
def three_files(file, year):
    types = [f'{year}_date.txt', f'{year}_pH.txt', f'{year}_co2.txt']
    list = []
    with open(file, 'r') as file:
        for line in file.readlines():
            temp = line.strip()
            elements = temp.split(', ')
            list.append(elements)
        
        for i in range(len(types)):
            with open(types[i], 'w') as file:
                file.write('')
            with open(types[i], 'a') as file:
                for data in list:
                    file.write(f'{data[i]}\n')



get_column('C:/Users/Chris/OneDrive - csulb/Ocean Acidification Data/CascoBay_NCEI_2020.xlsx', '2020.txt')
three_files('2020.txt', '2020')