FROM microsoft/dotnet:2.0-sdk
WORKDIR /serviceb
COPY service-b.csproj .
RUN dotnet restore service-b.csproj
ENV ASPNETCORE_URLS http://*:5000
EXPOSE 5000
ENTRYPOINT ["dotnet", "out/service-b.dll"]
COPY . .
RUN dotnet publish -o out service-b.csproj