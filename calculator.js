        var calculate = 0;
        var a=0,b=0;
        var result=0;
        var symbol;
        var temp = 'Explaination: '+"<br>"+'=>';
        var bod = 0;
        var array = new Array();
        var n = 0;
        var OB=0,CB=0,O=0,D=0,M=0,A=0,S=0;
        var i,j,k,m;
        function delete_back()
        {
            array[n] = 0;
            n--;
            document.getElementById("display").value = array.join('');
        }
        function one_1()
        {
            if(bod == 1)
            {
                array[n] = 1;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+1;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'1';
            document.getElementById("explain").innerHTML = temp;
        }
        function two_2()
        {
            if(bod == 1)
            {
                array[n] = 2;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+2;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'2';
            document.getElementById("explain").innerHTML = temp;
        }
        function three_3()
        {
            if(bod == 1)
            {
                array[n] = 3;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+3;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'3';
            document.getElementById("explain").innerHTML = temp;
        }
        function four_4()
        {
            if(bod == 1)
            {
                array[n] = 4;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+4;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'4';
            document.getElementById("explain").innerHTML = temp;
        }
        function five_5()
        {
            if(bod == 1)
            {
                array[n] = 5;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+5;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'5';
            document.getElementById("explain").innerHTML = temp;
        }
        function six_6()
        {
            if(bod == 1)
            {
                array[n] = 6;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+6;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'6';
            document.getElementById("explain").innerHTML = temp;
        }
        function seven_7()
        {
            if(bod == 1)
            {
                array[n] = 7;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+7;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'7';
            document.getElementById("explain").innerHTML = temp;
        }
        function eight_8()
        {
            if(bod == 1)
            {
                array[n] = 8;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+8;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'8';
            document.getElementById("explain").innerHTML = temp;
        }
        function nine_9()
        {
            if(bod == 1)
            {
                array[n] = 9;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10+9;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'9';
            document.getElementById("explain").innerHTML = temp;
        }
        function zero_0()
        {
            if(bod == 1)
            {
                array[n] = 0;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*10;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'0';
            document.getElementById("explain").innerHTML = temp;
        }
        function zeroes_00()
        {
            if(bod == 1)
            {
                array[n] = 0;
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                calculate = calculate*100;
                document.getElementById("display").value = calculate;
            }
            temp = temp+'00';
            document.getElementById("explain").innerHTML = temp;
        }
        function ac_0()
        {
            if(calculate != 0)
                temp = temp+"<br>"+'=>';
            calculate = 0;
            a=0;
            b=0;
        }
        function plus()
        {
            if(bod == 1)
            {
                array[n] = '+';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                if(symbol == '-' && a != 0 && calculate != 0)
                {
                    a = a+calculate;
                    calculate = 0;
                }
                else if(symbol == '*' && a != 0 && calculate != 0)
                {
                    a = a*calculate;
                    calculate = 0;
                }
                else if(symbol == '/' && a != 0 && calculate != 0)
                {
                    a = a/calculate;
                    calculate = 0;
                }
                else
                {
                    if(calculate != 0)
                    {
                        if(a != 0)
                            a = a+calculate;
                        else
                            a = calculate;
                        calculate = 0;
                    }
                }
            }
            symbol = '+';
            document.getElementById("operator").value = symbol;
            if(calculate == 0)
            {
                temp = temp+' + ';
                document.getElementById("explain").innerHTML = temp;
            }
        }
        function minus()
        {
            if(bod == 1)
            {
                array[n] = '-';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                if(symbol == '+' && a != 0 && calculate != 0)
                {
                    a = a+calculate;
                    calculate = 0;
                }
                else if(symbol == '*' && a != 0 && calculate != 0)
                {
                    a = a*calculate;
                    calculate = 0;
                }
                else if(symbol == '/' && a != 0 && calculate != 0)
                {
                    a = a/calculate;
                    calculate = 0;
                }
                else
                {
                    if(calculate != 0)
                    {
                        if(a != 0)
                            a = a-calculate;
                        else
                            a = calculate;
                        calculate = 0;
                    }
                }
            }
            symbol = '-';
            document.getElementById("operator").value = symbol;
            if(calculate == 0)
            {
                temp = temp+' - ';
                document.getElementById("explain").innerHTML = temp;
            }
        }
        function multi()
        {
            if(bod == 1)
            {
                array[n] = '*';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                if(symbol == '+' && a != 0 && calculate != 0)
                {
                    a = a+calculate;
                    calculate = 0;
                }
                else if(symbol == '-' && a != 0 && calculate != 0)
                {
                    a = a-calculate;
                    calculate = 0;
                }
                else if(symbol == '/' && a != 0 && calculate != 0)
                {
                    a = a/calculate;
                    calculate = 0;
                }
                else
                {
                if(calculate != 0)
                {
                    if(a != 0)
                        a = a*calculate;
                    else
                        a = calculate;
                    calculate = 0;
                }
            }
            symbol = '*';
            document.getElementById("operator").value = symbol;
            if(calculate == 0)
            {
                temp = temp+' * ';
                document.getElementById("explain").innerHTML = temp;
            }
        }
        }

        function divi()
        {
            if(bod == 1)
            {
                array[n] = '/';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                if(symbol == '+' && a != 0 && calculate != 0)
                {
                    a = a+calculate;
                    calculate = 0;
                }
                else if(symbol == '-' && a != 0 && calculate != 0)
                {
                    a = a-calculate;
                    calculate = 0;
                }
                else if(symbol == '*' && a != 0 && calculate != 0)
                {
                    a = a*calculate;
                    calculate = 0;
                }
                else
                {
                if(calculate != 0)
                {
                    if(a != 0)
                        a = a/calculate;
                    else
                        a = calculate;
                    calculate = 0;
                }
            }
            symbol = '/';
            document.getElementById("operator").value = symbol;
            if(calculate == 0)
            {
                temp = temp+' / ';
                document.getElementById("explain").innerHTML = temp;
            }
            }
        }
        function equals()
        {
            if(bod == 1)
            {
                priority();
                for(i=0;i<=n;i++)
                {
                    if(array[i] == '(' && OP > 0 && OP == CB)
                    {
                        i = i+1;
                        if(array[i] == ')')
                        {
                            for(k=i;k<=n;k++)
                            {
                                array[k] = array[k+2];
                            }
                            i = 0;
                        }
                    }
                    if(array[i] == '/' && D > 0)
                    {
                        array[i-1] = array[i-1]/array[i+1];
                        n = n-2;
                        alert("n value is"+n);
                        D--;
                        for(k=i;k<=n;k++)
                        {
                            array[k] = array[k+2];
                        }
                        i=0;
                        array.pop();
                        array.pop();
                        
                    }
                    else if(array[i] == '*' && M > 0 && D == 0)
                    {
                        array[i-1] = array[i-1]*array[i+1];
                        n = n-2;
                        alert("n value is"+n);
                        M--;
                        for(k=i;k<=n;k++)
                        {
                            array[k] = array[k+2];
                        }
                        i=0;
                        array.pop();
                        array.pop();
                       
                    }
                    else if(array[i] == '+' && A > 0 && M == 0 && D == 0)
                    {
                        array[i-1] = array[i-1]+array[i+1];
                        n = n-2;
                        alert("n value is"+n);
                        A--;
                        for(k=i;k<=n;k++)
                        {
                            array[k] = array[k+2];
                        }
                        i=0
                        array.pop();
                        array.pop();
                        
                    }
                    else if(array[i] == '-' && S > 0 && A == 0 && M == 0 && D == 0)
                    {
                        array[i-1] = array[i-1]-array[i+1];
                        n = n-2;
                        alert("n value is"+n);
                        S--;
                        for(k=i;k<=n;k++)
                        {
                            array[k] = array[k+2];
                        }
                        i=0;
                        array.pop();
                        array.pop();
                        
                    }
                }
                document.getElementById("explain").innerHTML = array;
            }
            else
            {
            b = calculate;
            if(symbol == '+')
            {
                result = a+b;
            }
            else if(symbol == '-')
            {
                result = a-b;
            }
            else if(symbol == '*')
            {
                result = a*b;
            }
            else if(symbol == '/')
            {
                result = a/b;
            }
            else
            {
                alert("No operation is selected");
            }
            //symbol = '';
            //document.getElementById("operator").value = symbol;
            calculate = result;
            a=0;
            b=0;
            document.getElementById("display").value = result;
            temp = temp+' = '+result;
            document.getElementById("explain").innerHTML = temp;
            }
        }
        function Bodmas()
        {
            bod = bod+1;
            if(bod == 1)
            {
                document.getElementById("indicate").style.backgroundColor="rgb(31, 182, 202)";
            }
            if(bod == 2)
            {
                bod = 0;
                document.getElementById("indicate").style.backgroundColor="white";
            }
        }
        function priority()
        {
            for(m=0;m<=n;m++)
            {
                if(array[m] == '(')
                    OB++;
                else if(array[m] == ')')
                    CB++;
                else if(array[m] == 'of')
                    O++;
                else if(array[m] == '/')
                    D++;
                else if(array[m] == '*')
                    M++;
                else if(array[m] == '+')
                    A++;
                else if(array[m] == '-')
                    S++;
            }
        }
        function l_brace()
        {
            if(bod == 1)
            {
                array[n] = '(';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                alert("please select Bodmas");
            }
        }
        function r_brace()
        {
            if(bod == 1)
            {
                array[n] = ')';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                alert("please select Bodmas");
            }
        }
        function OF()
        {
            if(bod == 1)
            {
                array[n] = 'of';
                document.getElementById("display").value = array.join('');
                n++;
            }
            else
            {
                alert("please select Bodmas");
            }
        }