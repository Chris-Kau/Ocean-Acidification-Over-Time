with open('Ocean Acidification Data/combined_pH.txt', 'r') as file:
    pH = []
    for i in file.readlines():
        pH.append(i.strip())

with open('Ocean Acidification Data/combined_co2.txt', 'r') as file:
    co2 = []
    for i in file.readlines():
        co2.append(i.strip())

relations = []

for idx in range(len(pH)):
    relations.append(float(pH[idx])/float(co2[idx]))

temp = 0
for value in relations:
    temp += value

mean = temp / len(relations)
    
print(mean)

