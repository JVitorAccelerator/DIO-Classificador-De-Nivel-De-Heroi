while True:
    continuar_sair= input('Digite 0 para sair ou qualquer tecla para continuar:')
    if continuar_sair == '0':
        break
    else:
        rank=''
        nome= input('Digite o nome do herói:')
        xp= int(input('Digite a quantidade de XP do herói:'))
        if xp >=10001:
            rank= 'Radiante'
        elif xp>= 9001:
            rank= 'Imortal'
        elif xp>= 8001:
            rank= 'Ascendente'
        elif xp>= 7001:
            rank= 'Platina'
        elif xp>= 5001:
            rank= 'Ouro'
        elif xp>= 2001:
            rank= 'Prata'
        elif xp>= 1001:
            rank= 'Bronze'
        else:
            rank= 'Ferro'
    
    print('O Herói de nome %s está no nível de %s' % (nome, rank))
        
