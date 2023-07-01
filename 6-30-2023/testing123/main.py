def number(lines):
    
    for index, val in enumerate(lines):
        lines[index] = f'{index+1}: {val}'
        
    return lines
        
    