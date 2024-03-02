using System.Text.Json.Serialization;

namespace StroiTrendTask.Api.Models;

public class Tags : BaseModel
{
    [JsonPropertyName("records")] public Dictionary<string, Dictionary<string, int>> Records { get; set; }
}