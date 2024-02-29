FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 433

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["StroiTrendTask.Api/StroiTrendTask.Api.csproj", "StroiTrendTask.Api/"]
RUN dotnet restore "StroiTrendTask.Api/StroiTrendTask.Api.csproj"
COPY . .
WORKDIR "/src/StroiTrendTask.Api"
RUN dotnet build "StroiTrendTask.Api.csproj" -c Release -o /app/build --no-restore

FROM build AS publish
RUN dotnet publish "StroiTrendTask.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "StroiTrendTask.Api.dll"]
