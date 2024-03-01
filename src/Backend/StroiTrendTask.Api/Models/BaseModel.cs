using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public abstract class BaseModel
{
    [JsonPropertyName("name")] public string Name { get; set; }

    [JsonPropertyName("request")] public Request Request { get; set; }

    [JsonPropertyName("total")] public int Total { get; set; }
}