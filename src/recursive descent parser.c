#include<stdio.h>
#include<string.h>
char input[10];
int i=0,error=0;
void E();
void T();
voidEprime();
voidTprime();
void F();
void main()
{
	clrscr();
	printf("Enter an arithmetic expression   :\n");
	gets(input);
	E();
	if(strlen(input)==i&&error==0)
		printf("\nAccepted..!!!");
	else
		printf("\nRejected..!!!");
	getch();
}
void E()
{
T();
Eprime();
}
voidEprime()
{
if(input[i]=='+')
     {
i++;
T();
Eprime();
     }
}
void T()
{
F();
Tprime();
}
voidTprime()
{
if(input[i]=='*')
     {
		i++;
		F();
		Tprime();
     }
}
void F()
{
	if(input[i]=='(')
	{
		i++;
		E();
		if(input[i]==')')
		i++;
	}
	else if(isalpha(input[i]))
	{
		i++;
		while(isalnum(input[i])||input[i]=='_')
		i++;
	}
	else
		error=1;
}
