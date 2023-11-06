---
layout: post
title: "Code example"
---

[SOURCE - Python Classes and Objects](https://www.w3schools.com/python/python_classes.asp)

Use the words `mysillyobject` and `abc` instead of `self`:

```python
class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()
```
