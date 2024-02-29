using System.Reflection;
using Microsoft.OpenApi.Models;
using StroiTrendTask.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "StroiTrend Task Api",
        Description = "A Web API to fetch data from provided json",
        Contact = new OpenApiContact
        {
            Name = "Kim Fom",
            Email = "kimfom01@gmail.com",
            Url = new Uri("https://github.com/kimfom01/")
        },
        License = new OpenApiLicense
        {
            Name = "MIT Licence",
            Url = new Uri("https://opensource.org/license/mit/")
        }
    });

    var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});
builder.Services.AddScoped<IFileLoader, JsonLoader>();
builder.Services.AddScoped<IDurationService, DurationService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();