def print_name(name):
    print(f"Hello, {name}!")

print_name("Alice")

def fave_num(a, b):
    print(f"My favorite number is {a} and {b}!")

fave_num(7, 42)

a = 10
b = 20

def add_num(x, y):
    return x + y

result = add_num(a, b)

print(result)





def check_grade(g):
    if g >= 90 and g <= 100:
        print("With high honor")
    elif g >= 80 and g < 90:
        print("With honor")
    elif g >= 70 and g < 80:
        print("Passed")
    else:
        print("Failed")

check_grade(95)


num = [1, 2, 3, 4, 5]

print(num[4])