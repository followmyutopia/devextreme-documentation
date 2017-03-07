@echo off
call :traverse
goto :eof

:traverse
for /D %%d in (*) do (
    xcopy e:\!Repositories\hg-mobile-website\Docs\Source\14_1\applications\DataLayer\styles.css %%d /y
    cd %%d
    call :traverse
    cd ..
)
exit /b