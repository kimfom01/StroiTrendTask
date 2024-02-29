using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Duration
{
    [JsonPropertyName("name")] public string Name { get; set; }

    [JsonPropertyName("request")] public Request Request { get; set; }

    [JsonPropertyName("total")] public int Total { get; set; }

    [JsonPropertyName("records")] public Dictionary<string, DurationData> Records { get; set; }
}